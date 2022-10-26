export default function BigButton(props) {
  return (
    <a href="#" className="big-button">
        <span className="big-button__arrow-span">
      <svg
      className="big-button__arrow"
        width="21"
        height="13"
        viewBox="0 0 21 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="big-button__arrow"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 6.47656L20.2752 7.20139L14.4766 13L13.7737 12.2971L19.0944 6.97646L-3.63036e-07 6.97646L-3.10999e-07 5.97646L19.0502 5.97646L13.7986 0.724826L14.5234 -2.37804e-07L20.2971 5.77369L21 6.47656Z"
          fill="#242424"
        />
      </svg>
      </span>
      <span className="big-button__text">{props.text}</span>
    </a>
  );
}
