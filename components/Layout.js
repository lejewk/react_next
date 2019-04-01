import Header from "./Header"

const layoutStytle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

export default function Layout(props) {
    return (
        <div style={layoutStytle}>
            <Header />
            {props.children}
        </div>
    )
}