import React from 'react'
import {Stack} from "@mui/material" 
import {categories} from "../utils/constant"



const Sidebar = ( { selectedCategory , setSelectedCategory } ) => (
    <Stack direction="row"
    sx={{
        overflowY: "auto",
        height: {xs: "auto", md:"95%"},
        flexDirection: {md: "column"},
        py: "7px"
    }}
    >
    {categories.map((category) => (
        <button
        className='category-btn'
        style={{background: category.value === selectedCategory && "#ffa31a",
        color: "white"
        }}
        key={category.id}
        onClick={() => {
            setSelectedCategory(category?.value) 
        }}
        >
            <span
            style={{color: category.value === selectedCategory ? "white" : "#ffa31a",
            marginRight: "15px"
            }}
            >{category.icon}</span>

            <span
            style={{opacity: category.value === selectedCategory ? "1" : "0.8" }}
            >{category.name}</span>
        </button>
    ))}
    </Stack>
)
export default Sidebar