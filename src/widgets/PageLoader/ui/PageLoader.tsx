import style from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={`${style.PageLoader}`}>
      <img className={`${style.PreloadGif}`} src="images/loadgif.gif" alt="Загрузочный экран" />
    </div>
  );
};