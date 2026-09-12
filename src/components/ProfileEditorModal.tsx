import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, User, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';
import { initialProfile } from '../data/portfolioData';

interface ProfileEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onSave: (updated: UserProfile) => void;
  onReset: () => void;
}

export const ProfileEditorModal: React.FC<ProfileEditorModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset,
}) => {
  const [form, setForm] = useState<UserProfile>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset profile to default template data?')) {
      onReset();
      setForm({ ...initialProfile });
      onClose();
    }
  };

  return (
    <div
      id="profile-editor-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <div
        id="profile-editor-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-750 shadow-2xl text-slate-100 p-6 sm:p-8 space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Customize Portfolio Info</h2>
              <p className="text-xs text-slate-400">
                Personalize your name, role, bio, and links. Changes save to your browser.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Profile successfully updated!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-cyan-500 focus:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Role Title</label>
              <input
                type="text"
                required
                value={form.roleTitle}
                onChange={(e) => setForm({ ...form, roleTitle: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-cyan-500 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Professional Bio</label>
            <textarea
              rows={3}
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-cyan-500 focus:outline-hidden resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-cyan-500 focus:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Location</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:border-cyan-500 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">GitHub URL</label>
              <input
                type="url"
                value={form.github}
                onChange={(e) => setForm({ ...form, github: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs focus:border-cyan-500 focus:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">LinkedIn URL</label>
              <input
                type="url"
                value={form.linkedin}
                onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs focus:border-cyan-500 focus:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Twitter / X URL</label>
              <input
                type="url"
                value={form.twitter || ''}
                onChange={(e) => setForm({ ...form, twitter: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs focus:border-cyan-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Availability Status */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Show "Available for Hire" Status</span>
              </label>
              <input
                type="checkbox"
                checked={form.availableForHire}
                onChange={(e) => setForm({ ...form, availableForHire: e.target.checked })}
                className="w-4 h-4 rounded text-cyan-500 focus:ring-cyan-400 bg-slate-900 border-slate-700"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">Availability Note</label>
              <input
                type="text"
                value={form.availabilityNote}
                onChange={(e) => setForm({ ...form, availabilityNote: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:border-cyan-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400">Years Exp</label>
              <input
                type="number"
                value={form.stats.yearsExp}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stats: { ...form.stats, yearsExp: Number(e.target.value) },
                  })
                }
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400">Projects</label>
              <input
                type="number"
                value={form.stats.projectsCompleted}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stats: { ...form.stats, projectsCompleted: Number(e.target.value) },
                  })
                }
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400">Git Commits</label>
              <input
                type="number"
                value={form.stats.githubCommits}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stats: { ...form.stats, githubCommits: Number(e.target.value) },
                  })
                }
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400">Clients</label>
              <input
                type="number"
                value={form.stats.happyClients}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stats: { ...form.stats, happyClients: Number(e.target.value) },
                  })
                }
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleResetDefaults}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-950/40 border border-rose-900/40 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="profile-save-btn"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer shadow-md shadow-cyan-500/20"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
