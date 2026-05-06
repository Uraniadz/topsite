import type { Service } from './types';

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  return (
    <article>
      <img src={service.image} alt={service.title} />

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <a href={service.link}>Learn More</a>
    </article>
  );
};

export default ServiceCard;
