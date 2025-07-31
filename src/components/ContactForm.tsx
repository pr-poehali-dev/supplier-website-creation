import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  inn: string;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    inn: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Данные формы:', formData);
    
    // Сброс формы
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      company: '',
      inn: '',
    });
    
    setIsSubmitting(false);
    onClose();
    
    // Показываем уведомление об успешной отправке
    alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  const isFormValid = formData.fullName && formData.phone && formData.email;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Icon name="Mail" size={24} className="text-blue-600" />
            Оставить заявку
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">ФИО *</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Введите ваше ФИО"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Компания</Label>
            <Input
              id="company"
              type="text"
              placeholder="Название компании"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inn">ИНН</Label>
            <Input
              id="inn"
              type="text"
              placeholder="1234567890"
              value={formData.inn}
              onChange={(e) => handleInputChange('inn', e.target.value)}
              maxLength={12}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={16} className="animate-spin mr-2" />
                  Отправка...
                </>
              ) : (
                'Отправить заявку'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}