import React from 'react';

interface ModalContentProps {
    onToggleModal(): void;
}

export const ModalContent: React.FC<ModalContentProps> = ({
    onToggleModal,
}) => {
    return (
        <div className='ui dimmer visible active' onClick={onToggleModal}>
            <div
                onClick={(e) => e.stopPropagation()}
                className='ui modal visible active'
            >
                <i className='close icon' onClick={onToggleModal}></i>
                <div className='header'>
                    <div>I am a REUSABLE title!!!</div>
                </div>
                <div className='content'>
                    <p>I am a REUSABLE modal window!!!</p>
                </div>
                <div className='actions'>
                    <button onClick={onToggleModal} className='ui button'>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};
