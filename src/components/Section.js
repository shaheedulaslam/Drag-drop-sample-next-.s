import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';


const Section = ({ title }) => {
  const [{ isDragging}, Section1drag] = useDrag(() => ({
    type: ItemTypes.SECTION,
    item: { title },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));


  return (
      <div className={`grid grid-cols-1 rounded text-center text-black ${isDragging ? 'opacity-50': ''}`} ref={Section1drag}>
            <div className='col-span-1 bg-gray-200  py-12'>
            <span>{title}</span>
            </div>
            <div className='grid grid-cols-2 space-x-1 my-1'>
            <div className='col-span-1 bg-gray-200  py-12'>
            </div>
            <div className='col-span-1 bg-gray-200   py-12'>
            </div>
            </div>
            <div className='grid grid-cols-3 space-x-1'>
            <div className='col-span-1 bg-gray-200  py-12'>
            </div>
            <div className='col-span-1 bg-gray-200  py-12'>
            </div>
            <div className='col-span-1 bg-gray-200  py-12'>
            </div>
            </div>
      </div>
  );
};

export default Section;
