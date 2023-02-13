import React from 'react';

type Props = {
  departments: [Category],
  handleSetSlug: (slug: string) => void,
}

type Category = {
  id: number,
  name: string,
  slug: string,
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  console.log("Mis datos de query son", departments)
  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }
  const DepartmentOptions = departments.map((department: Category) => {
    return (
      <option
        key={department.id}
        value={department.slug}>
        {department.name}</option>
    )
  })

  return (
    <div className='pr5'>
      <select
        defaultValue={0}
        onChange={onHandleSetSlug}
      >
        <option disabled value="0">Seleccione una opción</option>
        {DepartmentOptions}
      </select>
    </div>
  )
}

export default DepartmentGroup;
