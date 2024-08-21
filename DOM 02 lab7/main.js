let data = [
  {
    province: "Bangkok",
    district: ["Donmuang", "Bangkhen", "Dindang"],
  },
  {
    province: "Nontaburi",
    district: ["Pakkret", "BangSai", "BangYai"]
  },
  {
    province: "Pathumthani",
    district: ["Thanyaburi", "Lam Luk Ka", "Sam Khok"]
  }
];
function getProvinces(data){
  let listProvinces = data.reduce((prev,curr)=>{
    prev.push(curr.province);
    return prev
  },[])
  return listProvinces;
}
console.log(getProvinces(data))

function createProvince(arr)
{
  arr.forEach((element) => {
    let newProvince = document.createElement('option')
    newProvince.innerHTML = element
    document.querySelector('#province').append(newProvince);
  })
  //disabled province
  document.querySelector('#province').firstElementChild.disabled=true;
}
function createDistrict(arr,province)
{
  // remove old children
  for (let x of document.querySelector('#district').children)
  {
    if(x.innerHTML=="District"){
      x.disabled = true
      x.selected = true
      continue;
      } //skip remove district
    console.log(x)
    setTimeout(()=>{x.remove()},500)
  }

  // creat new children
  arr.forEach((element)=>{
   
    if(element.province==province)
    {
      element.district.forEach((e)=>{
        let newDistrict = document.createElement('option')
        newDistrict.innerHTML = e
        document.querySelector('#district').append(newDistrict);
      })
    }
  })
}

const select1 = document.querySelector('#province')
const select2 = document.querySelector('#district')
select1.addEventListener('change',()=>createDistrict(data,select1.value) )

function main(){
  createProvince(getProvinces(data));
}
main();