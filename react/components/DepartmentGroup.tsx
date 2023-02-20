import React from 'react';

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string,
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  const onHandleSetSlug = (e: any) => {
    handleSetSlug(`${e.target.value}/$\{term\}?_q=$\{term\}&map=ft`)
  }
  const DepartmentOptions: any = departments.map((department: Category) => {
    return (

      <option
        key={department.id}
        value={department.slug}>
        {department.name}
      </option>
    )
  })

  return (
    <div>
      <select
        className='w-100 pa2 br2 ba b--light-gray'
        style={{ fontFamily: 'Roboto-Regular' }}
        defaultValue={0}
        onChange={(e) => onHandleSetSlug(e)}
      >
        <option disabled value="0">Seleccione una opción</option>

        {DepartmentOptions}
      </select>
    </div>
  )
}

export default DepartmentGroup;
