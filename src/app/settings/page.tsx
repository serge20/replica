"use client";

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { PencilIcon, ChevronDownIcon } from 'lucide-react';

interface FormErrors {
  [key: string]: string;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('editProfile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Form state
  const [formData, setFormData] = useState({
    yourName: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '**********',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
  });
  
  const toggleSidebar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.yourName.trim()) {
      newErrors.yourName = 'Name is required';
    } else if (formData.yourName.length < 2) {
      newErrors.yourName = 'Name must be at least 2 characters';
    }
    
    // Username validation
    if (!formData.userName.trim()) {
      newErrors.userName = 'Username is required';
    } else if (formData.userName.length < 3) {
      newErrors.userName = 'Username must be at least 3 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Password validation (assuming it's a new password, not masked)
    if (formData.password && formData.password !== '**********') {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        newErrors.password = 'Password must have at least 8 characters, one uppercase, one lowercase, one number and one special character';
      }
    }
    
    // Date of Birth validation
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of Birth is required';
    }
    
    // Address validation
    if (!formData.presentAddress.trim()) {
      newErrors.presentAddress = 'Present Address is required';
    }
    
    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    // Postal code validation
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal Code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.postalCode)) { // Basic US postal code format
      newErrors.postalCode = 'Please enter a valid postal code';
    }
    
    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  
  // Handle form submission
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      // Here you would typically make an API call to update the profile
      alert('Profile updated successfully!');
    } else {
      console.log('Form has errors');
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black opacity-50" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg">
            <Sidebar />
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'editProfile'
                      ? 'border-black text-black font-medium'
                      : 'border-transparent text-gray-500'
                  }`}
                  onClick={() => setActiveTab('editProfile')}
                >
                  Edit Profile
                </button>
                <button
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'preferences'
                      ? 'border-black text-black font-medium'
                      : 'border-transparent text-gray-500'
                  }`}
                  onClick={() => setActiveTab('preferences')}
                >
                  Preferences
                </button>
                <button
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'security'
                      ? 'border-black text-black font-medium'
                      : 'border-transparent text-gray-500'
                  }`}
                  onClick={() => setActiveTab('security')}
                >
                  Security
                </button>
              </div>
            </div>
            
            {/* Profile Form */}
            {activeTab === 'editProfile' && (
              <div className="p-8">
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src="/avatar.jpg"
                        alt="Profile avatar"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute bottom-0 right-0 bg-black text-white p-1.5 rounded-full"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <form onSubmit={handleProfileSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Your Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="yourName"
                      value={formData.yourName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.yourName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.yourName && (
                      <p className="mt-1 text-sm text-red-500">{errors.yourName}</p>
                    )}
                  </div>
                  
                  {/* User Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.userName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.userName && (
                      <p className="mt-1 text-sm text-red-500">{errors.userName}</p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                    )}
                  </div>
                  
                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded-lg pr-10`}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      {errors.dateOfBirth && (
                        <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Present Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Present Address
                    </label>
                    <input
                      type="text"
                      name="presentAddress"
                      value={formData.presentAddress}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.presentAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.presentAddress && (
                      <p className="mt-1 text-sm text-red-500">{errors.presentAddress}</p>
                    )}
                  </div>
                  
                  {/* Permanent Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Permanent Address
                    </label>
                    <input
                      type="text"
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.permanentAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.permanentAddress && (
                      <p className="mt-1 text-sm text-red-500">{errors.permanentAddress}</p>
                    )}
                  </div>
                  
                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                    )}
                  </div>
                  
                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.postalCode && (
                      <p className="mt-1 text-sm text-red-500">{errors.postalCode}</p>
                    )}
                  </div>
                  
                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-500">{errors.country}</p>
                    )}
                  </div>
                  
                  <div className="md:col-span-2 mt-4 flex justify-end">
                    <button
                      type="submit"
                      className="py-3 px-8 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Preferences</h3>
                <p className="text-gray-500">Preferences settings coming soon.</p>
              </div>
            )}
            
            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Security</h3>
                <p className="text-gray-500">Security settings coming soon.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}