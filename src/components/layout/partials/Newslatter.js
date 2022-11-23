import React from 'react';
import classNames from 'classnames';
import Button from '../../elements/Button';
import Input from '../../elements/Input';

const Newslatter = ({
    className,
    ...props
}) => {
  
    const classes = classNames(
      '',
      className
    );

    return (
        <nav
            {...props}
            className={classes}
        >
            <div className='footer-input'>
                <h2>Newslatter</h2>

                <Input id="newsletter" type="email" label="Email" labelHidden hasIcon="newsletter" placeholder="Email address">
                    <Button tag="button" color="alert" wideMobil>
                        Submit
                    </Button>
                </Input>
                
            </div>
        </nav>
    )
}

export default Newslatter;