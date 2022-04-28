class VirtualKeyboard {
  ru = ['Й', 'Ц', 'У'];

  currentlang = 'ru';

  constructor(lang) {
    this.currentlang = lang;
  }

  static Render() {
    return '<div class="wrapper"> </div>';
  }
}

const VK = new VirtualKeyboard(null);
VK.Render();
