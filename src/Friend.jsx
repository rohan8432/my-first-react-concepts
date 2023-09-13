export default function Friend({friend}){
    const {name, email} = friend;
    return(
        <div className="box">
            <h3>Friends name:{name} </h3>
            <h3>Email:{email} </h3>
        </div>
    )
}