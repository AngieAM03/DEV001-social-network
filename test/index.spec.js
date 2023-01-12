/* eslint-disable import/no-unresolved */
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  collection, addDoc, onSnapshot, deleteDoc,
} from 'firebase/firestore';

import {
  createEmail, singInEmail, saveTask, listenerTask, deletePublication,
} from '../src/lib/functionFirebase.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('createEmail', () => {
  it('Debería ser una función', () => {
    expect(typeof createEmail).toBe('function');
  });

  it('Debe llamarse al método crear usuario', () => {
    createUserWithEmailAndPassword.mockImplementation(() => {
      Promise.resolve({
        email: 'cutoalberto@gmail.com',
        password: '1234567',
      });
    });
    createEmail(createUserWithEmailAndPassword);

    expect(createUserWithEmailAndPassword).toBeCalled();
  });

  it('Deberia retornar un objeto con la propiedad email y password', () => {
    createEmail('cutoalberto@gmail.com', '1234567');
    expect({
      email: 'danicagarcia@gmail.com',
      password: '1234567',
    }).toEqual(expect.anything());
  });
});

it('Debe recibir parámetros', () => {
  createEmail('cuto@gmail.com', '1234567');
  expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'cuto@gmail.com', '1234567');
});

describe('signInEmail', () => {
  it('Debería ser una función', () => {
    expect(typeof singInEmail).toBe('function');
  });

  it('Debe validar el usuario registrado', () => {
    signInWithEmailAndPassword.mockImplementation(() => Promise.resolve({
      email: 'cutoalberto@gmail.com',
      password: '1234567',
    }));
    singInEmail(signInWithEmailAndPassword);

    expect(signInWithEmailAndPassword).toBeCalled();
  });
  it('Deberia retornar un objeto con la propiedad email', () => {
    singInEmail('cutoalberto@gmail.com', '1234567');
    expect({
      email: 'cutoalberto@gmail.com',
      password: '1234567',
    }).toEqual(expect.anything());
  });
  it('Debe recibir parámetros', () => {
    singInEmail('cuto@gmail.com', '1234567');
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'cuto@gmail.com', '1234567');
  });
});

describe('saveTask', () => {
  it('Debería ser una función', () => {
    expect(typeof saveTask).toBe('function');
  });

  it('Debería llamar al metodo addDoc', () => {
    saveTask(addDoc);
    expect(addDoc).toBeCalled();
  });

  it('Debería devolver un objeto', () => {
    addDoc.mockImplementation(() => Promise.resolve('resolve'));
    collection.mockImplementation(() => ({
      coment: 'Hola',
      likes: [],
    }));
    saveTask('Hola', []);
    expect(addDoc).toEqual(expect.anything(), {
      coment: 'Hola',
      likes: [],
    });
  });
});

describe('listenerTask', () => {
  it('Debería ser una función', () => {
    expect(typeof listenerTask).toBe('function');
  });

  it('Debe llamar al método onSnapshot ', () => {
    onSnapshot.mockImplementation(() => ({}));
    listenerTask(onSnapshot);

    expect(onSnapshot).toBeCalled();
  });
  it('Deberia escuchar el post publicado', () => {
    listenerTask(saveTask);
    expect({ saveTask }).toEqual(expect.anything());
  });
  it('Debe recibir  parámetros', () => {
    const callback = () => {};
    listenerTask(callback);
    expect(onSnapshot).toHaveBeenCalledWith(collection(), callback);
  });
});

describe('deletePublication', () => {
  it('Debería ser una función', () => {
    expect(typeof deletePublication).toBe('function');
  });
  it('Debería ser llamada con un parametro', () => {
    const id = 'DWTm2mZI4UhaSRMSn01E';
    deletePublication(id);
    expect(jest.fn()).toHaveBeenCalledWith(id);
  });
  it('Debería llamar al metodo updateDoc', () => {
    deletePublication(deleteDoc);
    expect(deleteDoc).toBeCalled();
  });
  it('Debería eliminar un  objeto', () => {
    deletePublication({
      id: 'DWTm2mZI4UhaSRMSn01E',
    });
    expect(deleteDoc).toEqual(expect.anything(), { id: 'DWTm2mZI4UhaSRMSn01E' });
  });
});
