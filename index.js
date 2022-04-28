/* class VirtualKeyboard {
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
const a = VK.Render(); */

const keyboard = document.body;

keyboard.addEventListener('keydown', (event) => {
  // eslint-disable-next-line no-console
  console.log(event.key);
  console.log('press');
});
keyboard.addEventListener('click', () => {
  console.log('click');
});
