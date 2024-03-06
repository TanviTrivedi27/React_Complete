function Hello() {
  var myName = "Tanvi";
  let number = 456;
  let fullName = () => {
    return "Tanvi Trivedi";
  };
  return (
    <p>
      MsgNo:{number} I am your master {fullName()}
    </p>
  );
}
export default Hello;
