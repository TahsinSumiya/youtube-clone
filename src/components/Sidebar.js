import React from 'react'
import { Stack } from '@mui/system'
import {categories} from '../utils/constant'
const SelectedCategory='New'
const Sidebar = () => (
   
<Stack
direction="row"
sx={{
    overflowY:"auto",
    height:{
        sx:"auto",
        md:"95%",
    },
    flexDirection:{md:'column'},
}}
>

    {categories.map((category)=>(
        <button className='category-btn'
        style={{
            background:category.name=== SelectedCategory && '#FC1503',
            color:'white'
        }}

        key={category.name}
        >
            <span style={{color:category.name=== SelectedCategory ? 'white':'red',marginRight:'15px'}}>{category.icon}</span>
            <span style={{ opacity: category.name === SelectedCategory ? "1" : "0.8" }}>{category.name}</span>
        </button>
    ))}

</Stack>
    
);
export default Sidebar;

