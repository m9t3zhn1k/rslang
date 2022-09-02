import { BaseComponent } from '../base-component/base-component';
import { Router } from '../../router/router';
import audioCallImg from '../../assets/images/game/audio-call.jpg';
import sprintImg from '../../assets/images/game/sprint.jpg';
import './games.scss';

export class Games extends BaseComponent {
  constructor(parent: HTMLElement, router: Router) {
    super(parent, 'div', ['game']);
    const container: HTMLElement = new BaseComponent(this.element, 'div', ['container']).element;
    const wrapper: HTMLElement = new BaseComponent(container, 'div', ['game__body']).element;
    const wrapperButton: HTMLElement = new BaseComponent(wrapper, 'div', ['game-wrapper']).element;
    const descriptionAudioCall: string = `Тренировка Аудиовызов развивает словарный запас.
     Вы должны выбрать перевод услышанного слова.`;

    const descriptionSprint: string = `Тренирует навык быстрого перевода с английского языка на русский.
     Вам нужно выбрать соответствует ли перевод предложенному слову.`;

    const audioCallButton: HTMLElement = this.renderButtonsForGame(
      wrapperButton,
      audioCallImg,
      descriptionAudioCall,
      'Аудиовызов'
    );
    const sprintButton: HTMLElement = this.renderButtonsForGame(wrapperButton, sprintImg, descriptionSprint, 'Спринт');

    audioCallButton.id = 'audiochallenge';
    sprintButton.id = 'sprint';
    router.navigateApp([audioCallButton, sprintButton]);
  }

  renderButtonsForGame(parentElement: HTMLElement, img: string, description: string, title: string): HTMLElement {
    const gameButton: HTMLElement = new BaseComponent(parentElement, 'div', ['game-button']).element;
    const containerImg = new BaseComponent(gameButton, 'div', ['game-button__wrapper-img']).element;
    const imgForBtn = new BaseComponent(containerImg, 'img', ['game-button__img']).element;
    (imgForBtn as HTMLImageElement).src = img;
    const descriptionGame = new BaseComponent(containerImg, 'p', ['game-button__text'], `${description}`).element;
    new BaseComponent(gameButton, 'h3', ['game-button__title'], `${title}`).element;
    gameButton.addEventListener('mouseenter', (): void => {
      descriptionGame.classList.add('active');
      gameButton.classList.add('active-background');
      imgForBtn.classList.add('active');
    });
    gameButton.addEventListener('mouseleave', (): void => {
      descriptionGame.classList.remove('active');
      imgForBtn.classList.remove('active');
      gameButton.classList.remove('active-background');
    });

    return gameButton;
  }
}
