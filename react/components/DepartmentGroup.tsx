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
  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}?_q=$\{term\}&map=ft`)
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
    <div>
      <select
        className='w-100 pa2 br2 ba b--light-gray'
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
