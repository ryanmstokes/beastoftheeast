import { Form, FormError, FieldError, Label, Submit } from '@redwoodjs/forms'
import React, { useState } from 'react'
import ImgFormModal from 'src/components/form/forms/img-upload'
import FormFields from 'src/components/form/inputs/form-fields'

const VehicleForm = (props) => {
  const [showImgForm, toggleShowImgForm] = useState(false)
  const [imgID, setImgID] = useState(undefined)

  const onSubmit = (data) => {
    const dataWithUrl = Object.assign(data, { imgID: imgID })
    props.onSave(dataWithUrl, props?.vehicle?.id)
  }
  const passImgData = (data) => {
    setImgID(data.createImage.id)
    toggleShowImgForm(!showImgForm)
  }
  const toggleImgInputForm = () => {
    toggleShowImgForm(!showImgForm)
  }

  const formFields = [
    { name: 'imgID', type: 'Img' },
    { name: 'title', type: 'String' },
    { name: 'description', type: 'String' },
    { name: 'passengers', type: 'Int' },
    { name: 'extras', type: 'String' },
    { name: 'cover', type: 'String' },
    { name: 'fees', type: 'String' },
    { name: 'price', type: 'Int' },
  ]

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <FormFields
          fields={formFields}
          model={props?.vehicle}
          toggleImgInputForm={toggleImgInputForm}
          imgID={imgID}
        />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
      {showImgForm && (
        <ImgFormModal
          passImgData={passImgData}
          toggleShowImgForm={toggleShowImgForm}
        />
      )}
    </div>
  )
}

export default VehicleForm
