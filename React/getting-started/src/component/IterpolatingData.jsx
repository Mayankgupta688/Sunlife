export default function IterpolatingData() {
    var userInfo = {
        name: "Mayank",
        displayName: function () {
            alert(userInfo.name)
        }
    }
    return (
        <>
            <input type="button" value="Click" onClick={userInfo.displayName} />
        </>  
    )
}