'use strict';

onUiLoaded(() => {
  /**
   * @type { (tabName: string, id: string) => void }
   */
  const createStyleElement = (tabName, id) => {
    const style = document.createElement('style');
    style.id = id;
    style.textContent = [
      `#${tabName}_prompt > label > textarea,`,
      `#${tabName}_neg_prompt > label > textarea`,
      `{ font-family: monospace; }`
    ].join(' ');
    document.head.appendChild(style);
  };

  /**
   * @type { (tabName: string, id: string) => void }
   */
  const toggleStyleElement = (tabName, id) => {
    /** @type { HTMLStyleElement | null } */
    const exists = document.head.querySelector(`#${id}`);
    if (exists) {
      exists.remove();
      return;
    }

    createStyleElement(tabName, id);
  };

  /**
   * @type { (button: HTMLButtonElement) => void }
   */
  const toggleButtonSymbol = (button) => {
    button.textContent = button.textContent === '🇵' ? '🇲' : '🇵';
  };

  /**
   * @type { (tabName: string) => void }
   */
  const initialize = (tabName) => {
    const id = `${tabName}_monospace_style`;
    createStyleElement(tabName, id);

    /** @type { HTMLButtonElement | null } */
    const button = gradioApp().querySelector(`#${tabName}_toggle_monospace_button`);
    if (!button) throw new Error(`toggle button could be not found`);
    button.addEventListener('click', () => {
      toggleStyleElement(tabName, id);
      toggleButtonSymbol(button);
    });

    /** @type { HTMLDivElement | null } */
    const container = gradioApp().querySelector(`#${tabName}_tools`);
    if (!container) throw new Error(`tools container could be not found`);
    container.appendChild(button);
  };

  initialize('txt2img');
  initialize('img2img');
});
