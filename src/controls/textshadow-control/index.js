import {
  BaseControl,
  Button,
  Dropdown,
  RangeControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ColorControl from '../color-control';
import ResetControl from '../reset-control';

function TextShadowControl({ controlName, resRequiredProps, enableTransition }) {
  const { setAttributes, attributes, objAttributes } = resRequiredProps;

  const {
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hShadow`]: hShadow,
    [`${controlName}vShadow`]: vShadow,
    [`${controlName}blur`]: blur,
    [`${controlName}shadowTransition`]: shadowTransition,
  } = attributes;

  return (
    <BaseControl
      label={__('Text Shadow', 'zolo-blocks')}
      className="zb-textshadow-control-wrap"
    >
      <Dropdown
        className="zb-textshadow-control-dropdown"
        contentClassName="zb-popover-content-area"
        position="bottom right"
        renderToggle={({ isOpen, onToggle }) => (
          <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
            <span className="dashicons dashicons-edit"></span>
          </Button>
        )}
        renderContent={() => (
          <>
            <div
              className="zb-textshadow-content-wrap"
              style={{
                minWidth: '230px',
                padding: '10px',
              }}
            >
              <ColorControl
                defaultColor={(objAttributes[`${controlName}shadowColor`] || {}).default}
                label={__('Color', 'zolo-blocks')}
                color={shadowColor}
                onChange={(shadowColor) =>
                  setAttributes({
                    [`${controlName}shadowColor`]:
                      shadowColor,
                  })
                }
              />

              <ResetControl
                onReset={() =>
                  setAttributes({
                    [`${controlName}blur`]: undefined,
                  })
                }
              >
                <RangeControl
                  label={__('Blur', 'zolo-blocks')}
                  value={blur}
                  onChange={(blur) =>
                    setAttributes({
                      [`${controlName}blur`]: blur,
                    })
                  }
                  min={0}
                  max={100}
                />
              </ResetControl>

              <ResetControl
                onReset={() =>
                  setAttributes({
                    [`${controlName}hShadow`]: undefined,
                  })
                }
              >
                <RangeControl
                  label={__(
                    'Horizontal',
                    'zolo-blocks'
                  )}
                  value={hShadow}
                  onChange={(hShadow) =>
                    setAttributes({
                      [`${controlName}hShadow`]: hShadow,
                    })
                  }
                  min={0}
                  max={100}
                />
              </ResetControl>

              <ResetControl
                onReset={() =>
                  setAttributes({
                    [`${controlName}vShadow`]: undefined,
                  })
                }
              >
                <RangeControl
                  label={__(
                    'Vertical',
                    'zolo-blocks'
                  )}
                  value={vShadow}
                  onChange={(vShadow) =>
                    setAttributes({
                      [`${controlName}vShadow`]: vShadow,
                    })
                  }
                  min={0}
                  max={100}
                />
              </ResetControl>

              {enableTransition && (
                <RangeControl
                  label={__(
                    'Shadow Transition',
                    'zolo-blocks'
                  )}
                  value={shadowTransition}
                  onChange={(shadowTransition) =>
                    setAttributes({
                      [`${controlName}shadowTransition`]:
                        shadowTransition,
                    })
                  }
                  step={0.01}
                  min={0}
                  max={5}
                />
              )}
            </div>
          </>
        )}
      />
    </BaseControl>
  );
}

export default TextShadowControl;
