import React, { useState } from "react";
import Modal from "../Modal";

const ModalPage = ()=>{
    const [showModal, setShowModal] = useState(false);
    const handleButtonClick = (e)=>{
        setShowModal(true);
    };
    const closeModal = ()=>{
        setShowModal(false);
    };
    const actionBar = <div><button onClick={closeModal}>I accept</button></div>;
    const modal = <Modal onClose={closeModal} actionBar={actionBar}>
        <p>Here is an import agreement to accept</p>
    </Modal>;
    return(
        <>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, nunc eget vehicula pretium, neque leo mattis eros, at cursus tortor lacus sit amet dolor. Nullam id tellus tincidunt, fringilla risus at, fermentum velit. Donec a tellus et mauris fringilla condimentum at pharetra mi. Nulla a dui quis justo tincidunt interdum non ut dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mauris tellus. Donec at malesuada sapien, non euismod ex. Quisque tempus sit amet purus et posuere. Nulla facilisi. Duis hendrerit ante sem, eu venenatis justo hendrerit vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non orci tellus. Proin mattis libero facilisis lorem scelerisque iaculis. Maecenas commodo dictum tortor, eget maximus augue congue sit amet. Quisque dictum eu felis id iaculis.
            </p>
            <button onClick={handleButtonClick}>Open Modal</button>
            {showModal && modal}
        </>
    );
};

export default ModalPage;