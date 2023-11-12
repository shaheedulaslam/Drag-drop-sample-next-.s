import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';


const Section = ({ title , subtitle ,childrentitle}) => {
  const [{ isDragging}, Section1drag] = useDrag(() => ({
    type: ItemTypes.SECTION,
    item: { title , subtitle , childrentitle},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));


  return (
      <div className={`grid grid-cols-1 rounded text-center text-black ${isDragging ? 'opacity-50': ''}`} ref={Section1drag}>
                  <div className="grid grid-cols-1 mb-1 text-center text-black">
          <div className="col-span-1 bg-gray-200 py-1">
            <span>Navbar</span>
          </div>
        </div>
            <div className='col-span-1 bg-gray-200  py-12'>
            <span>{title}</span>
            </div>
            <div className='grid grid-cols-2 space-x-1 my-1'>
            <div className='col-span-1 bg-gray-200  py-12'>
              {subtitle}
            </div>
            <div className='col-span-1 bg-gray-200   py-12'>
            {subtitle}
            </div>
            </div>
            <div className='grid grid-cols-3 space-x-1'>
            <div className='col-span-1 bg-gray-200  py-12'>
              {childrentitle}
            </div>
            <div className='col-span-1 bg-gray-200  py-12'>
            {childrentitle}
            </div>
            <div className='col-span-1 bg-gray-200  py-12'>
            {childrentitle}
            </div>
            </div>
      </div>
  );
};

export default Section;
