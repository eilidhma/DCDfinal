function ButtonUI({
    buttonWidth=345,
    buttonHeight=60,
    alignSelf="center",
    margin20=20,
    backgroundColorButton="rgb(148,212,108)",
    border="2px solid rgb(148,212,108)",
    value="Next question",
    fontSize="36px"
}){
    return(
        <input type="button" value={value} style={{
            width:buttonWidth,
            height:buttonHeight,
            alignSelf:alignSelf,
            margin:margin20,
            backgroundColor:backgroundColorButton,
            border:border,
            fontSize:fontSize
        }}/>
    )
}

export default ButtonUI;
        