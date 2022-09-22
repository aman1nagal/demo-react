import  About from "./About"
import Header from "./Header"
function Main(){
    return(
        <div>
            <Header/>
            <About name="React Tutorial" about="React is a JavaScript library for building user interfaces.

React is used to build single-page applications.

React allows us to create reusable UI components."/>
            <About name="Java Tutorial" about="Java is a popular programming language.

Java is used to develop mobile apps, web apps, desktop apps, games and much more."/>
            <About name="Python Tutorial" about="Python is a popular programming language.

Python can be used on a server to create web applications."/>
        </div>
    )
}
export default Main