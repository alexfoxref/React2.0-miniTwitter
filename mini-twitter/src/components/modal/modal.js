import React from 'react';

import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';


const DelModal = ({modal, onDel, toggle, className}) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalBody>
                Вы действительно хотите удалить эту запись?
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => {onDel();toggle()}}>Удалить</Button>{' '}
                <Button color="secondary" onClick={toggle}>Вернуться</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}
export default DelModal;
