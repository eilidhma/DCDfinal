

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80%;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  padding:20px;
  margin:30px;
`;

const Options = ({
  title="English Lavender",
  src="lavendar.png",
  text="placeholder",
  onClick=()=>{},
  climate="arid",
  goodIn="pots/planters",
  category="flowers",
  maintenance=" moderate",
  learn=" Learn more"
  }) => {
  return <Cont>
      <DescriptionCont>
        <ImgCont><Img src={src}/></ImgCont>
        <Points>
          <Title>{title}</Title>
          <Item><strong>Climate:</strong> {climate}</Item>
          <Item><strong>Good in:</strong> {goodIn}</Item>
          <Item><strong>Category:</strong> {category}</Item>
          <Item><strong>Maintenance:</strong> {maintenance}</Item>
        </Points>
      </DescriptionCont>
      <Button>{learn}</Button>
    </Cont>
  }

export default Options;