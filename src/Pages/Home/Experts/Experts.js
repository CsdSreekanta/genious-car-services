import React from 'react';
import expert1 from '../../../photos/experts/expert-1.jpg'
import expert2 from '../../../photos/experts/expert-2.jpg'
import expert3 from '../../../photos/experts/expert-3.jpg'
import expert4 from '../../../photos/experts/expert-4.jpg'
import expert5 from '../../../photos/experts/expert-5.jpg'
import expert6 from '../../../photos/experts/expert-6.png'
import Expert from '../Expert/Expert'

const experts=[
    {id:1, name: 'john william', img: expert1},
    {id:2, name: 'kinson  time', img: expert2},
    {id:3, name: 'De cock', img: expert3},
    {id:4, name: 'Ambrallea kill', img: expert4},
    {id:5, name: 'Jeyei Thog', img: expert5},
    {id:6, name: 'john Dende', img: expert6}
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className="row">
            {
                experts.map(expert=><Expert
                key = {expert.id}
                expert={expert}
                ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;