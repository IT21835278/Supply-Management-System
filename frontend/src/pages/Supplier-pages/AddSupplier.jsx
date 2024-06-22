import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { SupplieRegister, validateEmail } from '../../Services/SupplierService'
import SupplierNavBar from '../../component/SupplierNavBar/SupplierNavBar'


const AddSupplier = () => {
    const [formData, setformData] = useState({
        SupplierName:'', 
        SupplierID:'', 
        SupplierEmail:'', 
        SupplierContact:'', 
        ProductName:'', 
        ProductId:'', 
        SupplierProductPrice:'', 
        SupplierOrderStatus:'', 
        MaxSupply:''
    })
    const navigate = useNavigate()


    const {
        SupplierName, 
        SupplierID, 
        SupplierEmail, 
        SupplierContact, 
        ProductName, 
        ProductId, 
        SupplierProductPrice, 
        MaxSupply
    } = formData

    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setformData({...formData,[name]:value})
    }
      const register = async(e) =>{
        e.preventDefault()
        
        //validation
        if(!SupplierName || !SupplierID || !SupplierEmail || !SupplierContact || !ProductName || !ProductId || !SupplierProductPrice || !MaxSupply){
          return toast.error("All Fild must be fill")
        }
        if(!validateEmail(SupplierEmail)){
          return toast.error("Enter valid email")
        }
        
    
        try{
          const data = await SupplieRegister(formData)
          if(data){
            toast.success("User Registration Successful")
          navigate("/add-supplier")
          }
    
    
        }catch(error){
          toast.error(error.message)
    
        }
      }


  return (
    <div>
        <div><SupplierNavBar/></div>
        <div>
            

            <form onSubmit={register} class="max-w-sm mx-auto">
            <div class="mb-5">
                <label for="SupplierName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Supplier name</label>
                <input type="text" id="SupplierName" name='SupplierName' value={SupplierName} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="mb-5">
                <label for="SupplierID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Supplier ID</label>
                <input type="text" id="SupplierID" name='SupplierID' value={SupplierID} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="mb-5">
                <label for="SupplierEmail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Supplier email</label>
                <input type="email" id="SupplierEmail" name='SupplierEmail' value={SupplierEmail} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="mb-5">
                <label for="SupplierContact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Supplier contact</label>
                <input type="number" id="SupplierContact" name='SupplierContact' value={SupplierContact} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="mb-5">
                <label for="ProductName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Product name</label>
                <input type="text" id="ProductName" name='ProductName' value={ProductName} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="mb-5">
                <label for="ProductId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Product ID</label>
                <input type="text" id="ProductId" name='ProductId' value={ProductId} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="mb-5">
                <label for="SupplierProductPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Product Price</label>
                <input type="number" id="SupplierProductPrice" name='SupplierProductPrice' value={SupplierProductPrice} min={0} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="mb-5">
                <label for="MaxSupply" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Max Supply</label>
                <input type="text" id="MaxSupply" name='MaxSupply' value={MaxSupply} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>



            
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>

        </div>
    </div>
  )
}

export default AddSupplier