import imgPlan1 from '../../images/plan1.jpg'
import imgPlan2 from '../../images/plan2.jpg'
import imgPlan3 from '../../images/plan3.jpg'
import imgPlan4 from '../../images/plan4.jpg'

import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './PlansDetails.css'

import { getTypesPlansById } from '../../slices/typesPlansSlice';

const PlansDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()

    const { user: userAuth } = useSelector((state) => state.auth);
    const { plans } = useSelector((state) => state.plans);
    const { userPlan } = useSelector((state) => state.userPlan);

    const [first, setFirst] = useState();
    const [rest, setRest] = useState();
    const [image, setImage] = useState('');
    const [plan, setPlan] = useState({});


    useEffect(() => {
        dispatch(getTypesPlansById(id));
    }, [dispatch]);

    useEffect(() => {
        if (plans) {
            const selectedProduct = plans.find(product => product._id === id);
            //console.log(selectedProduct)
            if (selectedProduct) {
                setPlan(selectedProduct)
                setFirst(selectedProduct?.name?.substring(0, 1))
                setRest(selectedProduct?.name?.substring(1, selectedProduct.name.lenght))
                setImage(selectedProduct?.name === 'basic' ? imgPlan1 :
                    selectedProduct?.name === 'plus' ? imgPlan2 :
                        selectedProduct?.name === 'custom' ? imgPlan3 :
                            selectedProduct?.name === 'free' && imgPlan4)
            }
        }
        
    }, [plans])
    return (
        <div>
            {plan &&
                <>
                    {first && rest && <>
                        <h1 className='detail-name-h1'>{first}
                            <span className='detail-name-span'>{rest}</span>
                        </h1> </>}
                    {plans && image && <>
                        <div className="detail-image">
                            <img src={`${image}`} alt={plans.name} />
                        </div>
                    </>
                    }</>
            }
            {plan &&
                plan.name === 'basic' ? (
                <>
                    {userAuth && userPlan ?
                        <p><i><b>Você já possui um plano ativo.</b></i></p>
                        :
                        <></>}
                    <li className='detail-list'>
                        <p>Limite de 300 caracteres transcritos.</p>
                    </li>
                    <li className='detail-list'>
                        <p>Limite diário de 20 audios.</p>
                    </li>
                    <li className='detail-list'>
                        <p>Até 600 audios transcritos.</p>
                    </li>
                    <hr />
                    <p><i>Tudo isso por apenas R${plan.price.replace('.', ',').toString()}</i></p>
                </>
            )
                :
                plan.name === 'plus' ?
                    (
                        <>
                            {userAuth && userPlan ?
                                <p><i><b>Você já possui um plano ativo.</b></i></p>
                                :
                                <></>}
                            <li className='detail-list'>
                                <p>Limite de 800 caracteres transcritos.</p>
                            </li>
                            <li className='detail-list'>
                                <p>Limite diário de 35 audios.</p>
                            </li>
                            <li className='detail-list'>
                                <p>Até 1200 audios transcritos.</p>
                            </li>
                            <li className='detail-list'>
                                <p>Customização de gerenciamento dos audios.</p>
                            </li>
                            <hr />
                            <p><i>Tudo isso por apenas R${plan.price.replace('.', ',').toString()}</i></p>
                        </>
                    )
                    :
                    plan.name === 'custom' ?
                        (
                            <>
                                {userAuth && userPlan ?
                                    <p><i><b>Você já possui um plano ativo.</b></i></p>
                                    :
                                    <></>}
                                <li className='detail-list'>
                                    <p>Limite de 4096 caracteres transcritos.</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Limite diário de 100 audios.</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Até 3200 audios transcritos.</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Customização de gerenciamento dos audios.</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Tradução simultânea de qualquer idioma suportado.</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Recursos adicionais:</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Pauta de grupo</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Gerador de imagens</p>
                                </li>
                                <hr />
                                <p><i>Tudo isso por apenas R${plan.price.replace('.', ',').toString()}</i></p>
                            </>
                        )
                        :
                        plan.name === 'free' &&
                        (
                            <>
                                {userAuth && userPlan ?
                                    <p><i><b>Você já possui um plano ativo.</b></i></p>
                                    :
                                    <></>}
                                <li className='detail-list'>
                                    <p>Limite de 100 caracteres transcritos.</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Limite diário de 10 audios.</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Até 100 audios transcritos</p>
                                </li>
                                <li className='detail-list'>
                                    <p>Use até acabar a frânquia.</p>
                                </li>
                            </>
                        )
            }
            {userAuth && !userPlan ?
                <Link to={`/user/payment/${plan._id}`}>
                    <button id={plan._id} >Contratar</button>
                </Link>
                :
                userAuth && userPlan && plan.name !== 'free' ?
                    <Link to={`/user/payment/${plan._id}`}>
                        <button id={plan._id} >Upgrade</button>
                    </Link>
                    :
                    userAuth && userPlan && plan.name === 'free' ?
                        <>
                        </>
                        :
                        <Link to="/register"><button id={plan._id} >Cadastre-se</button></Link>
            }

        </div>
    )
}

export default PlansDetails