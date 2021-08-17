import PropTypes from "prop-types";

export const Data = ({fullName, bio, profession}) => {
    console.log(fullName);
    return(
        <>
        <h1>Full Name : {fullName}</h1>
        <h1>Bio : {bio}</h1>
        <h1>Profession : {profession}</h1>
        </>
    )
};

export const MyImage = ({children}) => {
    return(
        <>
        <h1> This is my {children} : </h1>
        <img src = "./myimage.jpg" alt ="mypicture" height ="420" style = {{marginBottom : 20, marginTop : 10}}></img>
        </>
    )
};

export const ActionAlert = ({handleName}) => {
    const buttonStyle = {height : 40, width : 120, fontSize : 20, fontWeight : 600, color : '#006064', marginBottom : 20 };
    return (
        <button style = {buttonStyle} onClick={e => handleName(e)}>Click Me</button>
    )
};

Data.defaultProps = {
    fullName: "Shalewa Tiamiyu",
    bio: "A female in the Game!",
    profession: "Software Engineer"
};
MyImage.defaultProps = {
    children: "image"
};

Data.PropTyes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};
MyImage.propTypes = {
    children: PropTypes.string
};