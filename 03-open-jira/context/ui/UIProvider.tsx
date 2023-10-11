import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState{
    sidemenuOpen: boolean;
    isAddingEntry :boolean;
    isDragging: boolean;
}

export interface ChildrenProp{
    children: JSX.Element | JSX.Element[]
}


const UI_INITIAL_STATE:UIState ={
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
} 


export const UIProvider:FC<ChildrenProp> = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE )

    //*MENU
    const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' })
    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })        
    
    //*ADD ENTRY
    const setIsAddingEntry = ( isAdding: boolean ) =>(
        dispatch({ type: 'UI - Set IsAddingEntry', payload: isAdding })
    )

    //*DRAGGING
    const startDragging = () => dispatch({ type: 'UI - Start Dragging' })
    const endDragging = () => dispatch({ type: 'UI - End Dragging' })

    return (
        <UIContext.Provider value={{
            ...state,

            //*Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            startDragging,
            endDragging
            
        }}>
            { children }
        </UIContext.Provider>
    )
}