import React from 'react'

const Perfil = () => {
    return (
        <div>

            <div class="container-perfil">

                <div class="megarow">
                    <div class="row2">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input className='input-perfil' type="text" id="fname" name="firstname"  />
                        </div>
                    </div>
                    <div class="row2">
                        <div class="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div class="col-75">
                            <input className='input-perfil' type="text" id="lname" name="lastname"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <label for="lEmail">Email</label>
                    </div>
                    <div class="col-75">
                        <input className='input-perfil' type="text" id="lEmail" name="Email"  />
                    </div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <label for="lAddress">Address</label>
                    </div>
                    <div class="col-75">
                        <input className='input-perfil' type="text" id="lAddress" name="Address"  />
                    </div>
                </div>
                <div class="megarow">
                    <div class="row2">
                        <div class="col-25">
                            <label for="lApar">Aparmaent</label>
                        </div>
                        <div class="col-75">
                            <input className='input-perfil' type="text" id="lApar" name="Aparmaent"  />
                        </div>
                    </div>
                    <div class="row2">
                        <div class="col-25">
                            <label for="lCity">City</label>
                        </div>
                        <div class="col-75">
                            <input className='input-perfil' type="text" id="lCity" name="City"  />
                        </div>
                    </div>
                </div>
                <div class="megarow">
                    <div class="row2">
                        <div class="col-25">
                            <label for="country">Country</label>
                        </div>
                        <div class="col-75">
                            <select id="country" name="country">
                                <option value="australia">Peru</option>
                                <option value="canada">Colombia</option>
                                <option value="usa">Chile</option>
                            </select>
                        </div>
                    </div>
                    <div class="row2">
                        <div class="col-25">
                            <label for="lzip">Zip Code</label>
                        </div>
                        <div class="col-75">
                            <input className='input-perfil' type="text" id="lzip" name="Zip"  />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <label for="lphonr">Telephone</label>
                    </div>
                    <div class="col-75">
                        <input className='input-perfil' type="text" id="lphone" name="Telephone"  />
                    </div>
                </div>
                <button className='boton-update' href="#">Update Info</button>

                <button className='boton-cancel' href="Perfil">Cancel</button>
            </div>

          
            

        </div>
    )
}
export default Perfil