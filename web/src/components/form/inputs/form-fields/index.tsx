import { FieldError, Label, TextField, NumberField } from '@redwoodjs/forms'
import ImageCell from 'src/components/Image/ImageCell'

const FormFields = ({ fields, model, toggleImgInputForm, imgID }) => {
  return fields.map(({ name, type }) => {
    let showImgPreview = false
    if (imgID && type === 'Img') {
      showImgPreview = true
    }
    return (
      <div key={name}>
        <Label
          name={name}
          className="rw-label"
          errorClassName="rw-label rw-label-error"
          key={name + 'label'}
        ></Label>
        {type === 'String' && (
          <TextField
            name={name}
            defaultValue={model?.[name]}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
            key={name + 'input'}
          />
        )}
        {type === 'Int' && (
          <NumberField
            name={name}
            defaultValue={model?.[name]}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
            key={name + 'input'}
          />
        )}
        {type === 'Img' && (
          <button
            type="button"
            onClick={() => toggleImgInputForm()}
            style={{ marginTop: '10px', cursor: 'pointer' }}
          >
            Add Image
          </button>
        )}
        {showImgPreview && (
          <div style={{ marginTop: '10px' }}>
            <ImageCell id={imgID} />
          </div>
        )}
        <FieldError
          name={name}
          className="rw-field-error"
          key={name + 'error'}
        />
      </div>
    )
  })
}

export default FormFields
