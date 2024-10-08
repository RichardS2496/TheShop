export function ShopCart({ cartQuanty }) {
  return (
    <div className="relative">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
        .cls-1 {
          fill: none;
          stroke: #FFFFFF;
          stroke-miterlimit: 10;
          stroke-width: 1.91px;
        }
      `}</style>
        </defs>
        <g id="cart">
          <circle className="cls-1" cx="10.07" cy="20.59" r="1.91" />
          <circle className="cls-1" cx="18.66" cy="20.59" r="1.91" />
          <path
            className="cls-1"
            d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
          />
          <polyline
            className="cls-1"
            points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
          />
        </g>
      </svg>
      {cartQuanty > 0 ? (
        <div className="bg-red-700 text-white text-xs font-bold h-5 w-5 absolute rounded-full top-[-0.5rem] right-[-0.5rem] flex items-center justify-center p-2">
          {cartQuanty > 9 ? "+9" : cartQuanty}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
