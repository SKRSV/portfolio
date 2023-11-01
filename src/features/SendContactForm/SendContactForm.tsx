import { ContactForm, postContactForm } from '@/entities';
import {
  errorNotification,
  successNotification,
} from '@/shared/lib/notificications/createNotification';
import React from 'react';

export const SendContactForm = () => {
  const handleSubmit = async (values: any) => {
    try {
      await postContactForm(values);

      successNotification('🦄 Повідомлення успішно відправлене');
    } catch (error) {
      errorNotification('Упс... Щось пішло не так');
    }
  };

  return <ContactForm handleSubmit={handleSubmit} />;
};
