import {
  IconPicker as PackageIconPicker,
  DisplayIcon as PackageDisplayIcon
} from "wordpress-icon-picker";
import "wordpress-icon-picker/dist/style.css"

/**
 * Wrapper Component for IconPicker
 * @param {*} props
 * @returns
 */
export const IconPicker = (props) => {
  return <PackageIconPicker {...props} />
}

/**
 * Wrapper Component for DisplayIcon
 * @param {*} props
 * @returns
 */
export const DisplayIcon = (props) => {
  return <PackageDisplayIcon {...props} />
}
