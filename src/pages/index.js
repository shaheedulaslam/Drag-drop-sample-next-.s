import Image from 'next/image'
import { Inter } from 'next/font/google'
import DragDrop from '@/components/DragDrop'
import DragAndDropExample from '@/components/DragDrop1'


export default function Home() {
  return (
    <>
    <div className='flex-col justify-center'>
      <h1 className='text-3xl text-center'>Hello Guys,</h1>
      <p className='text-center'>this is an sample project for Drag and drop here is that...</p>
        <DragDrop />
    </div>
    </>

  )
}
