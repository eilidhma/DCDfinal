import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
`;


const Clock = () => {
  return <Cont>
    <svg width="300" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Clock-2 1">
            <g id="clock-bg">
            <circle id="outside" cx="300" cy="300" r="300" fill="black"/>
            <circle id="background" cx="300" cy="300" r="260" fill="white"/>
            </g>
            <g id="circle">
            <g id="markerSet">
            <path id="hourMarker" d="M300.5 538V495.5" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker" d="M283.242 517.383C283.559 514.362 281.368 511.655 278.347 511.338C275.326 511.02 272.619 513.212 272.302 516.233C271.984 519.254 274.176 521.96 277.197 522.278C280.218 522.595 282.924 520.403 283.242 517.383Z" fill="black"/>
            <path id="minMarker_2" d="M260.664 514.39C261.295 511.418 259.399 508.498 256.427 507.866C253.456 507.235 250.536 509.131 249.904 512.103C249.273 515.074 251.169 517.994 254.14 518.626C257.112 519.257 260.032 517.361 260.664 514.39Z" fill="black"/>
            <path id="minMarker_3" d="M238.516 509.05C239.455 506.161 237.874 503.059 234.985 502.12C232.096 501.181 228.993 502.762 228.055 505.651C227.116 508.54 228.697 511.643 231.586 512.582C234.475 513.52 237.578 511.939 238.516 509.05Z" fill="black"/>
            <path id="minMarker_4" d="M217.063 501.435C218.298 498.66 217.05 495.409 214.275 494.173C211.5 492.938 208.249 494.186 207.014 496.961C205.778 499.736 207.026 502.987 209.801 504.222C212.576 505.458 215.827 504.21 217.063 501.435Z" fill="black"/>
            </g>
            <g id="markerSet_2">
            <path id="hourMarker_2" d="M181.75 506.18L203 469.37" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_5" d="M177.102 479.686C178.888 477.229 178.343 473.789 175.886 472.004C173.428 470.218 169.989 470.763 168.203 473.221C166.418 475.678 166.962 479.118 169.42 480.903C171.877 482.689 175.317 482.144 177.102 479.686Z" fill="black"/>
            <path id="minMarker_6" d="M159.045 465.816C161.078 463.558 160.896 460.081 158.638 458.048C156.381 456.016 152.903 456.198 150.871 458.455C148.838 460.712 149.02 464.19 151.278 466.223C153.535 468.255 157.013 468.073 159.045 465.816Z" fill="black"/>
            <path id="minMarker_7" d="M142.55 450.12C144.807 448.087 144.989 444.61 142.957 442.352C140.924 440.095 137.447 439.913 135.189 441.945C132.932 443.978 132.75 447.455 134.782 449.713C136.815 451.97 140.292 452.152 142.55 450.12Z" fill="black"/>
            <path id="minMarker_8" d="M127.771 432.789C130.229 431.004 130.773 427.564 128.988 425.107C127.203 422.649 123.763 422.104 121.306 423.89C118.848 425.675 118.303 429.115 120.089 431.572C121.874 434.03 125.314 434.574 127.771 432.789Z" fill="black"/>
            </g>
            <g id="markerSet_3">
            <path id="hourMarker_3" d="M94.8199 419.25L131.63 398" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_9" d="M104.04 393.997C106.815 392.761 108.063 389.51 106.828 386.735C105.592 383.96 102.341 382.712 99.566 383.948C96.791 385.183 95.5431 388.434 96.7786 391.209C98.014 393.984 101.265 395.232 104.04 393.997Z" fill="black"/>
            <path id="minMarker_10" d="M95.3509 372.941C98.2398 372.003 99.8208 368.9 98.8822 366.011C97.9435 363.122 94.8407 361.541 91.9518 362.48C89.0629 363.418 87.4819 366.521 88.4205 369.41C89.3592 372.299 92.462 373.88 95.3509 372.941Z" fill="black"/>
            <path id="minMarker_11" d="M88.8891 351.104C91.8603 350.472 93.757 347.552 93.1254 344.581C92.4939 341.609 89.5733 339.713 86.6021 340.344C83.6309 340.976 81.7343 343.896 82.3658 346.868C82.9973 349.839 85.9179 351.735 88.8891 351.104Z" fill="black"/>
            <path id="minMarker_12" d="M84.7684 328.704C87.7893 328.387 89.9808 325.68 89.6633 322.66C89.3458 319.639 86.6395 317.447 83.6186 317.765C80.5976 318.082 78.4061 320.788 78.7236 323.809C79.0411 326.83 81.7474 329.022 84.7684 328.704Z" fill="black"/>
            </g>
            <g id="markerSet_4">
            <path id="hourMarker_4" d="M63 300.5H105.5" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_13" d="M89.6664 278.346C89.9839 275.325 87.7923 272.618 84.7714 272.301C81.7505 271.983 79.0442 274.175 78.7266 277.196C78.4091 280.217 80.6007 282.923 83.6216 283.241C86.6425 283.558 89.3489 281.367 89.6664 278.346Z" fill="black"/>
            <path id="minMarker_14" d="M93.5969 256.794C94.2348 253.817 92.3387 250.887 89.3619 250.249C86.3851 249.611 83.4548 251.507 82.8169 254.484C82.179 257.461 84.0751 260.391 87.0519 261.029C90.0287 261.667 92.959 259.771 93.5969 256.794Z" fill="black"/>
            <path id="minMarker_15" d="M98.722 235.217C99.6637 232.332 98.0877 229.229 95.202 228.287C92.3163 227.346 89.2137 228.922 88.272 231.807C87.3304 234.693 88.9063 237.796 91.792 238.737C94.6777 239.679 97.7804 238.103 98.722 235.217Z" fill="black"/>
            <path id="minMarker_16" d="M106.825 214.272C108.061 211.497 106.813 208.246 104.038 207.011C101.263 205.775 98.0116 207.023 96.7761 209.798C95.5406 212.573 96.7886 215.824 99.5636 217.06C102.339 218.295 105.59 217.047 106.825 214.272Z" fill="black"/>
            </g>
            <g id="markerSet_5">
            <path id="hourMarker_5" d="M94.8199 181.75L131.63 203" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_17" d="M128.989 175.887C130.774 173.43 130.229 169.99 127.772 168.205C125.314 166.419 121.875 166.964 120.09 169.421C118.304 171.879 118.849 175.318 121.306 177.104C123.764 178.889 127.203 178.344 128.989 175.887Z" fill="black"/>
            <path id="minMarker_18" d="M142.957 158.636C144.99 156.379 144.808 152.901 142.55 150.868C140.293 148.836 136.815 149.018 134.783 151.275C132.75 153.533 132.932 157.01 135.19 159.043C137.447 161.076 140.925 160.893 142.957 158.636Z" fill="black"/>
            <path id="minMarker_19" d="M158.64 142.962C160.897 140.929 161.08 137.451 159.047 135.194C157.015 132.937 153.537 132.755 151.28 134.787C149.022 136.82 148.84 140.297 150.873 142.555C152.905 144.812 156.383 144.994 158.64 142.962Z" fill="black"/>
            <path id="minMarker_20" d="M175.892 128.985C178.349 127.2 178.894 123.76 177.109 121.303C175.323 118.846 171.884 118.301 169.426 120.086C166.969 121.872 166.424 125.311 168.21 127.769C169.995 130.226 173.434 130.771 175.892 128.985Z" fill="black"/>
            </g>
            <g id="markerSet_6">
            <path id="hourMarker_6" d="M181.75 94.82L203 131.63" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_21" d="M214.268 106.829C217.043 105.594 218.291 102.343 217.055 99.5676C215.82 96.7927 212.568 95.5447 209.794 96.7802C207.019 98.0157 205.771 101.267 207.006 104.042C208.242 106.817 211.493 108.065 214.268 106.829Z" fill="black"/>
            <path id="minMarker_22" d="M234.987 98.8837C237.876 97.945 239.457 94.8422 238.519 91.9533C237.58 89.0644 234.477 87.4834 231.588 88.422C228.699 89.3607 227.118 92.4636 228.057 95.3525C228.996 98.2414 232.098 99.8223 234.987 98.8837Z" fill="black"/>
            <path id="minMarker_23" d="M256.423 93.1296C259.394 92.4981 261.291 89.5775 260.66 86.6063C260.028 83.6351 257.107 81.7385 254.136 82.37C251.165 83.0016 249.268 85.9221 249.9 88.8933C250.532 91.8645 253.452 93.7612 256.423 93.1296Z" fill="black"/>
            <path id="minMarker_24" d="M278.341 89.6591C281.362 89.3416 283.554 86.6353 283.236 83.6143C282.919 80.5934 280.213 78.4019 277.192 78.7194C274.171 79.0369 271.979 81.7432 272.297 84.7641C272.614 87.7851 275.321 89.9766 278.341 89.6591Z" fill="black"/>
            </g>
            <g id="markerSet_7">
            <path id="hourMarker_7" d="M300.5 63V105.5" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_25" d="M328.703 84.7705C329.021 81.7496 326.829 79.0433 323.808 78.7257C320.787 78.4082 318.081 80.5998 317.764 83.6207C317.446 86.6416 319.638 89.348 322.659 89.6655C325.68 89.983 328.386 87.7914 328.703 84.7705Z" fill="black"/>
            <path id="minMarker_26" d="M351.096 88.8995C351.727 85.9283 349.83 83.0077 346.859 82.3762C343.888 81.7446 340.967 83.6413 340.336 86.6125C339.704 89.5837 341.601 92.5042 344.572 93.1358C347.543 93.7673 350.464 91.8707 351.096 88.8995Z" fill="black"/>
            <path id="minMarker_27" d="M372.942 95.349C373.881 92.4601 372.3 89.3573 369.411 88.4186C366.522 87.48 363.419 89.061 362.481 91.9499C361.542 94.8388 363.123 97.9416 366.012 98.8803C368.901 99.8189 372.004 98.2379 372.942 95.349Z" fill="black"/>
            <path id="minMarker_28" d="M393.988 104.035C395.223 101.26 393.975 98.0088 391.2 96.7733C388.425 95.5379 385.174 96.7858 383.939 99.5608C382.703 102.336 383.951 105.587 386.726 106.822C389.501 108.058 392.752 106.81 393.988 104.035Z" fill="black"/>
            </g>
            <g id="markerSet_8">
            <path id="hourMarker_8" d="M419.25 94.82L398 131.63" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_29" d="M432.788 127.773C434.573 125.316 434.029 121.876 431.571 120.091C429.114 118.306 425.674 118.85 423.889 121.308C422.103 123.765 422.648 127.205 425.106 128.99C427.563 130.776 431.003 130.231 432.788 127.773Z" fill="black"/>
            <path id="minMarker_30" d="M450.127 142.548C452.159 140.29 451.977 136.813 449.72 134.78C447.462 132.748 443.985 132.93 441.952 135.187C439.92 137.445 440.102 140.922 442.359 142.955C444.617 144.987 448.094 144.805 450.127 142.548Z" fill="black"/>
            <path id="minMarker_31" d="M465.808 159.052C468.066 157.019 468.248 153.542 466.215 151.284C464.183 149.027 460.705 148.845 458.448 150.877C456.191 152.91 456.008 156.388 458.041 158.645C460.073 160.902 463.551 161.085 465.808 159.052Z" fill="black"/>
            <path id="minMarker_32" d="M479.696 177.106C482.153 175.321 482.698 171.881 480.912 169.424C479.127 166.966 475.687 166.422 473.23 168.207C470.772 169.992 470.228 173.432 472.013 175.889C473.799 178.347 477.238 178.892 479.696 177.106Z" fill="black"/>
            </g>
            <g id="markerSet_9">
            <path id="hourMarker_9" d="M506.18 181.75L469.37 203" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_33" d="M501.435 217.057C504.21 215.821 505.458 212.57 504.223 209.795C502.987 207.02 499.736 205.772 496.961 207.008C494.186 208.243 492.938 211.494 494.174 214.269C495.409 217.044 498.66 218.292 501.435 217.057Z" fill="black"/>
            <path id="minMarker_34" d="M509.055 238.52C511.944 237.581 513.525 234.479 512.586 231.59C511.648 228.701 508.545 227.12 505.656 228.058C502.767 228.997 501.186 232.1 502.125 234.989C503.063 237.878 506.166 239.459 509.055 238.52Z" fill="black"/>
            <path id="minMarker_35" d="M514.397 260.664C517.369 260.032 519.265 257.112 518.634 254.14C518.002 251.169 515.082 249.273 512.11 249.904C509.139 250.536 507.243 253.456 507.874 256.427C508.506 259.399 511.426 261.295 514.397 260.664Z" fill="black"/>
            <path id="minMarker_36" d="M517.387 283.242C520.408 282.925 522.599 280.218 522.282 277.197C521.964 274.176 519.258 271.985 516.237 272.302C513.216 272.62 511.024 275.326 511.342 278.347C511.659 281.368 514.366 283.56 517.387 283.242Z" fill="black"/>
            </g>
            <g id="markerSet_10">
            <path id="hourMarker_10" d="M538 300.5H495.5" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_37" d="M522.279 323.807C522.596 320.787 520.404 318.08 517.384 317.763C514.363 317.445 511.656 319.637 511.339 322.658C511.021 325.679 513.213 328.385 516.234 328.702C519.255 329.02 521.961 326.828 522.279 323.807Z" fill="black"/>
            <path id="minMarker_38" d="M518.63 346.865C519.261 343.894 517.365 340.974 514.393 340.342C511.422 339.711 508.502 341.607 507.87 344.578C507.239 347.55 509.135 350.47 512.106 351.102C515.078 351.733 517.998 349.837 518.63 346.865Z" fill="black"/>
            <path id="minMarker_39" d="M512.58 369.413C513.519 366.524 511.938 363.421 509.049 362.482C506.16 361.544 503.057 363.125 502.118 366.014C501.18 368.902 502.761 372.005 505.649 372.944C508.538 373.883 511.641 372.302 512.58 369.413Z" fill="black"/>
            <path id="minMarker_40" d="M504.47 393.911C505.715 391.147 504.484 387.896 501.72 386.651C498.956 385.405 495.705 386.637 494.46 389.401C493.214 392.165 494.446 395.415 497.21 396.661C499.974 397.906 503.224 396.675 504.47 393.911Z" fill="black"/>
            </g>
            <g id="markerSet_11">
            <path id="hourMarker_11" d="M506.18 419.25L469.37 398" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_41" d="M480.912 431.573C482.697 429.115 482.152 425.676 479.695 423.89C477.237 422.105 473.798 422.65 472.012 425.107C470.227 427.565 470.772 431.004 473.229 432.789C475.687 434.575 479.126 434.03 480.912 431.573Z" fill="black"/>
            <path id="minMarker_42" d="M466.225 449.717C468.258 447.46 468.075 443.982 465.818 441.95C463.561 439.917 460.083 440.1 458.05 442.357C456.018 444.614 456.2 448.092 458.458 450.125C460.715 452.157 464.193 451.975 466.225 449.717Z" fill="black"/>
            <path id="minMarker_43" d="M449.718 466.22C451.975 464.188 452.158 460.71 450.125 458.453C448.092 456.195 444.615 456.013 442.357 458.045C440.1 460.078 439.918 463.556 441.95 465.813C443.983 468.07 447.461 468.253 449.718 466.22Z" fill="black"/>
            <path id="minMarker_44" d="M431.575 480.91C434.032 479.124 434.577 475.685 432.792 473.227C431.006 470.77 427.567 470.225 425.109 472.01C422.652 473.796 422.107 477.235 423.892 479.693C425.678 482.15 429.117 482.695 431.575 480.91Z" fill="black"/>
            </g>
            <g id="markerSet_12">
            <path id="hourMarker_12" d="M419.25 506.18L398 469.37" stroke="black" stroke-width="9.5" stroke-miterlimit="10"/>
            <path id="minMarker_45" d="M391.208 504.224C393.982 502.989 395.23 499.738 393.995 496.963C392.759 494.188 389.508 492.94 386.733 494.175C383.958 495.411 382.71 498.662 383.946 501.437C385.181 504.212 388.433 505.46 391.208 504.224Z" fill="black"/>
            <path id="minMarker_46" d="M369.409 512.578C372.298 511.639 373.879 508.536 372.94 505.647C372.001 502.758 368.898 501.177 366.009 502.116C363.121 503.055 361.54 506.158 362.478 509.046C363.417 511.935 366.52 513.516 369.409 512.578Z" fill="black"/>
            <path id="minMarker_47" d="M346.863 518.628C349.835 517.996 351.731 515.076 351.1 512.105C350.468 509.133 347.548 507.237 344.576 507.868C341.605 508.5 339.709 511.42 340.34 514.392C340.972 517.363 343.892 519.259 346.863 518.628Z" fill="black"/>
            <path id="minMarker_48" d="M323.804 522.277C326.824 521.96 329.016 519.253 328.698 516.233C328.381 513.212 325.675 511.02 322.654 511.338C319.633 511.655 317.441 514.361 317.759 517.382C318.076 520.403 320.783 522.595 323.804 522.277Z" fill="black"/>
            </g>
            </g>
            <path id="minutes" d="M275.67 64.3L300.5 300.5" stroke="black" stroke-width="7" stroke-miterlimit="10"/>
            <path id="hours" d="M435.41 376.83L300.5 300.5" stroke="black" stroke-width="12.5" stroke-miterlimit="10"/>
            <path id="center" d="M300.5 323C312.926 323 323 312.926 323 300.5C323 288.074 312.926 278 300.5 278C288.074 278 278 288.074 278 300.5C278 312.926 288.074 323 300.5 323Z" fill="black"/>
            </g>
            </svg>
  </Cont>
}

export default Clock;
