function ButtonUI({
    buttonWidth=345,
    buttonHeight=60,
    alignSelf="center",
    margin20=20,
    backgroundColorButton="rgb(255,255,255,0.2)",
    border="5px solid rgb(255,255,255)",
    borderRadius="15px",
    value="Next question",
    fontSize="36px",
    fontWeight="regular",
    fontColor="white"
}){
    return(
        <input type="button" value={value} style={{
            width:buttonWidth,
            height:buttonHeight,
            alignSelf:alignSelf,
            margin:margin20,
            backgroundColor:backgroundColorButton,
            border:border,
            borderRadius:borderRadius,
            fontSize:fontSize,
            fontWeight:fontWeight,
            color:fontColor
        }}/>
    )
}

export default ButtonUI;
        