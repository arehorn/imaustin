import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Nav from './Nav';

describe('Nav Component', () => {
  it('renders the logo', () => {
    render(<Nav />);
    expect(screen.getByText('AUSTIN')).toBeInTheDocument();
    expect(screen.getByText('REHORN')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Nav />);
    const desktopLinksContainer = screen.getByText('Work').closest('div');
    expect(desktopLinksContainer).toHaveClass('hidden', 'md:flex');
    expect(screen.getAllByText('Work').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Connect').length).toBeGreaterThan(0);
  });

  it('renders desktop CTA button', () => {
    render(<Nav />);
    const ctaButtons = screen.getAllByText('Work Together');
    // Desktop CTA is hidden on small screens but rendered
    const desktopCta = ctaButtons.find(btn => btn.className.includes('hidden') && btn.className.includes('sm:inline-flex'));
    expect(desktopCta).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Nav />);

    // Initially, mobile menu should not be visible
    const getMobileLinks = () => screen.getAllByRole('link', { name: /Work|Experience|Connect/i }).filter(link =>
        link.parentElement && link.parentElement.className.includes('flex-col')
    );

    // Since the links are rendered conditionally when menuOpen is true, they shouldn't exist initially in the mobile menu container.
    // The desktop links are always there.

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Mobile menu links should now be visible
    // They are inside a div with absolute positioning and flex-col
    const mobileMenuLinks = screen.getAllByText('Work').filter(el =>
        el.className.includes('text-gray-300') && el.className.includes('hover:text-[#00F2FF]')
    );
    expect(mobileMenuLinks.length).toBe(1);

    // Click to close menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<Nav />);

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggleButton); // Open menu
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Find a mobile link and click it
    const mobileMenuLinks = screen.getAllByText('Work').filter(el =>
        el.className.includes('text-gray-300') && el.className.includes('hover:text-[#00F2FF]')
    );
    fireEvent.click(mobileMenuLinks[0]);

    // Menu should be closed
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });
});
