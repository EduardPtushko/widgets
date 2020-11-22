import React, { useState } from 'react';
import { Divider } from '../shared/Divider';
import { Modal } from './Modal/Modal';
import { ModalContent } from './ModalContent';
import { Accordion } from './Accordion';

export interface ItemType {
    title: string;
    content: string;
}

export const Modules: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const items: ItemType[] = [
        {
            title: 'Why is sky blue?',
            content: 'The sky is blue becouse it is',
        },
        {
            title: 'What does an orange taste like?',
            content: 'An orange tastes like an orange',
        },
        {
            title: 'What color is that cat?',
            content: 'The cat is an orange color.',
        },
    ];
    const onToggleModal = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <>
            <Divider title='Modal Component' />
            <button
                onClick={onToggleModal}
                className='ui secondary basic button'
            >
                Show Modal
            </button>
            {modalOpen && (
                <Modal>
                    <ModalContent onToggleModal={onToggleModal} />
                </Modal>
            )}
            <Divider title='Accordion Component' />
            <Accordion items={items} />
        </>
    );
};
