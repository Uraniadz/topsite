import { Link } from 'react-router-dom';
import './NotFoundPage404.css';

export default function NotFoundPage404() {
  return (
    <main className="nf" aria-labelledby="nf-title">
      <section className="nf__card" role="group" aria-label="404 Не знайдено">
        <p className="nf__badge" aria-hidden="true">
          404
        </p>

        <h1 id="nf-title" className="nf__title">
          Сторінку не знайдено
        </h1>

        <p className="nf__text">
          Можливо, введено неправильну адресу або сторінку було переміщено.
        </p>

        <div className="nf__actions">
          <Link
            to="/"
            className="nf__btn"
            aria-label="Перейти на головну сторінку"
          >
            Повернутися на головну сторінку
          </Link>
        </div>

        <p className="nf__hint">
          Код помилки: <span className="nf__code">404 Не знайдено</span>
        </p>
      </section>
    </main>
  );
}
