import { ChildrenProp } from "./interface"
 
export const DarkLayout = ({ children }:ChildrenProp) => {

    return (
        <div style={{
            backgroundColor:'#9B9B9B',
            borderRadius: '5px',
            padding:'10px'
        }}>
            <h3>Dark-Layout</h3>
            <div>
                { children }
            </div>
        </div>
    )
}
