export default function SmallButton(props) {
  return (
    <a href="#" className="small-button">
      <span className="small-button__text">{props.text}</span>
      <span className="small-button__arrow-span">
        <svg
          className="small-button__arrow"
          width="21"
          height="13"
          viewBox="0 0 21 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="small-button__arrow"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.7232e-08 6.52344L0.724826 5.79861L6.52344 -2.21465e-08L7.22631 0.702867L1.90563 6.02354L21 6.02354L21 7.02354L1.94976 7.02354L7.20139 12.2752L6.47656 13L0.702867 7.22631L7.7232e-08 6.52344Z"
            fill="#242424"
          />
        </svg>
      </span>
    </a>
  );
}
