import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="Wath happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="note__image">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJlOm0uArEiT-JbEhwDTfRKc7zWmMf8rVew&usqp=CAU"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
