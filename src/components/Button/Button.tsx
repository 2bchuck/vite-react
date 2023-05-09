import buttonStyles from './Button.module.scss';

export const Button = () => {
  return (
    <button className={buttonStyles.button}>
      <span className={buttonStyles.label}>Button</span>
    </button>
  );
};
