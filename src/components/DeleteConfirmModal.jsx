import React from 'react'
import Button from './Button';
import { Trash2,X} from 'lucide-react';

const DeleteConfirmModal = ({ isOpen, onCancel, onConfirm }) => {
      if (!isOpen) return null;

  return (
    <>
    <div className="fixed inset-0  backdrop-blur-[2px] flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Delete Task?</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this task? This action cannot be undone.</p>
            <div className="flex justify-center gap-4">
           
            <Button
                onClick={onConfirm}
                variant="danger"
                label="Delete"
                icon={<Trash2 />}
            >
                Delete
            </Button>
             <Button
                onClick={onCancel}
                variant="cancel"
                label="Cancel"
                icon={<X/>}
            >
                Cancel
            </Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default DeleteConfirmModal
