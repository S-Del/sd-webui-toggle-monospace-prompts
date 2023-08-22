import modules.scripts as scripts
from modules.ui_components import ToolButton

class ToggleMonospacePrompts(scripts.Script):
    def title(self):
        return "Toggle Monospace Prompts"

    def show(self, is_img2img):
        return scripts.AlwaysVisible

    def ui(self, is_img2img):
        tab = "img2img" if is_img2img else "txt2img"

        toggle_monospace_button = ToolButton(
            value="🇵", elem_id=f"{tab}_toggle_monospace_button"
        )

        return [ toggle_monospace_button ]
